const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];
  
  const input = document.getElementById("country");
  const suggestions = document.getElementById("suggestions");
  
      //add typing event on input
  input.addEventListener("keyup", () => {
        //clear previous suggestions 
    suggestions.innerHTML = "";
    let inputText = input.value;
        //loop all country names
    for (let i of countryList) {
        if (i.startsWith(inputText)) {
            //create and add new suggestion element
          let child = document.createElement("p");
          child.innerHTML = i;
          child.className = "suggestion";
          suggestions.appendChild(child);
        }
      }
  
    });
  
    //turning in this problem incomplete. Could you explain to me what I'm doing wrong towards keyup?
    //thank you professor. 