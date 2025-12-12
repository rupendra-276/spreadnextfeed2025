"use client";
import { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import SelectField from "./FormSelect";

export default function LocationSelector({ onLocationChange, initialData = {} }) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(initialData.country || "");
  const [selectedState, setSelectedState] = useState(initialData.state || "");
  const [selectedCity, setSelectedCity] = useState(initialData.city || "");

  // Load Countries
  useEffect(() => {
    try {
      const allCountries = Country.getAllCountries();
      setCountries(
        allCountries.map((country) => ({
          label: country.name,
          value: country.name,
          isoCode: country.isoCode,
        }))
      );
    } catch (error) {
      console.error("Error loading countries:", error);
    }
  }, []);

  // Load States
  useEffect(() => {
    try {
      if (selectedCountry) {
        const countryObj = countries.find(c => c.label === selectedCountry);
        if (countryObj) {
          const statesData = State.getStatesOfCountry(countryObj.isoCode);
          setStates(
            statesData.map((state) => ({
              label: state.name,
              value: state.isoCode, // Use isoCode instead of name for state
              name: state.name,
            }))
          );
        }
      } else {
        setStates([]);
        setSelectedState("");
      }
    } catch (error) {
      console.error("Error loading states:", error);
      setStates([]);
    }
  }, [selectedCountry, countries]);

  // Load Cities - FIXED: Use state isoCode to get cities
  useEffect(() => {
    try {
      if (selectedCountry && selectedState) {
        const countryObj = countries.find(c => c.label === selectedCountry);
        const stateObj = states.find(s => s.value === selectedState);
        
        if (countryObj && stateObj) {
          const citiesData = City.getCitiesOfState(countryObj.isoCode, stateObj.value);
          setCities(
            citiesData.map((city) => ({
              label: city.name,
              value: city.name,
            }))
          );
        }
      } else {
        setCities([]);
        setSelectedCity("");
      }
    } catch (error) {
      console.error("Error loading cities:", error);
      setCities([]);
    }
  }, [selectedCountry, selectedState, countries, states]);

  // Handle location changes - FIXED: Prevent infinite loop
  const handleLocationUpdate = useEffect(() => {
    if (selectedCountry || selectedState || selectedCity) {
      onLocationChange({
        country: selectedCountry,
        state: selectedState,
        city: selectedCity,
      });
    }
  }, [selectedCountry, selectedState, selectedCity, onLocationChange]);

  return (
    <div className="space-y-4">
      {/* Country Selector */}
      <SelectField
        label="Country"
        options={[
          { label: "Select Country", value: "" },
          ...countries
        ]}
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          setSelectedState("");
          setSelectedCity("");
        }}
      />

      {/* State/Province Selector */}
     
      <SelectField
        label="State / Province"
        options={[
          { label: "Select State", value: "" },
          ...states.map(state => ({ label: state.name, value: state.value }))
        ]}
        value={selectedState}
        onChange={(e) => {
          setSelectedState(e.target.value);
          setSelectedCity("");
        }}
        disabled={!selectedCountry}
      />

      {/* City Selector - FIXED: Now properly working */}
      <SelectField
        label="City"
        options={[
          { label: "Select City", value: "" },
          ...cities
        ]}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        disabled={!selectedState}
      />
    </div>
  );
}