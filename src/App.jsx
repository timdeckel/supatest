import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Input from "./components/Input";

const supabase = createClient("https://wakumygnbmiblksxppyn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indha3VteWduYm1pYmxrc3hwcHluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNjczOTUsImV4cCI6MjAzMDc0MzM5NX0.TCUf_otfYR_xieNmxRL4aOFY9nLVLJBiicUjxGdnLS4");
// https://www.youtube.com/watch?v=1iRrc6BFRE0&ab_channel=RavenJSg
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }


  return (
    <>
      <div className={styles.main}>
        <Input/>
        <ul>
          {countries.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;