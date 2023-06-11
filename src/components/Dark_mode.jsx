import Switch from "react-switch";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { useCallback } from "react";

function Dark_mode({ darkMode, setDarkMode}) {
  const handleThemeChange = (checked) => {
   const estado = document.querySelector(".container");
   setDarkMode(checked);
  
   if (checked) {
     estado.classList.add("active");
     localStorage.setItem('isDarkMode', checked);
     return;
   } else {
     estado.classList.remove("active");
     localStorage.setItem('isDarkMode', checked);
   }
  }

  return (
    <Switch
      onChange={handleThemeChange}
      checked={darkMode}
      checkedIcon={<BsMoonFill className="icon luna" />}
      uncheckedIcon={<BsSun className="icon sol" />}
      onColor="#222"
      offColor="#CBD5E0"
    />
  );
}


export default Dark_mode;
