/* Criando um estado Global */

const globalState = {
  allDevs: [],
  filteredDevs: [],
  loadingData: true,
  currentFilter: "",

  radioAnd: false,
  radioOr: true,
  
  checkboxes: [
    {
      filter: "java",
      description: "Java",
      checked: true,
      image: 'https://i.pinimg.com/originals/e9/94/61/e99461fdd5b3db8bdb3081d8acf5e524.png'
    },
    {
      filter: "javascript",
      description: "JavaScript",
      checked: true,
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
    },
    {
      filter: "python",
      description: "Python",
      checked: true,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    }
  ]
};

const globalDivDevs = document.querySelector("#divDevs");
const globalInputName = document.querySelector("#inputName");
const globalDivCheckboxes = document.querySelector("#checkboxes");
const globalRadioAnd = document.querySelector("#radioAnd");
const globalRadioOr = document.querySelector("#radioOr");

async function start() {
  globalInputName.addEventListener("input", handleInputChange);
  globalRadioAnd.addEventListener("input", handleRadioClick);
  globalRadioOr.addEventListener("input", handleRadioClick);
  renderCheckboxes();

  await fetchDevs();

  filteredDevs();
  
}

function renderCheckboxes() {
  const { checkboxes } = globalState;
  const inputCheckboxes = checkboxes.map((checkbox) => {
    const { filter: id, description, checked } = checkbox;
    // prettier-ignore
    return (
      `<label class="option">
        <input
          id="${id}"
          type="checkbox"
          checked="${checked}"
        />
        <span>${description}</span>
      </label>`
    );
  });
  globalDivCheckboxes.innerHTML = inputCheckboxes.join("");
  checkboxes.forEach((checkbox) => {
    const { filter: id } = checkbox;
    const element = document.querySelector(`#${id}`);
    element.addEventListener("input", handleCheckboxClick);
  });
}
async function fetchDevs() {
    const url ='http://localhost:3001/devs';

    const resource = await fetch(url);
    const json = await resource.json();
   
    const jsonWithImprovedSearch = json.map((item) => {
    const {name, programmingLanguages} = item;
    const lowerCaseName = name.toLocaleLowerCase();
   
    return {
      ...item,
      searchName: removeAccentMarksFrom(lowerCaseName)
      .split("")
      .filter((char) => char !== " ")
      .join(""),
      searchLanguages: getOnlyLanguagesFrom(programmingLanguages)
    };
    
  });
  console.log(jsonWithImprovedSearch);

  globalState.allDevs = [...jsonWithImprovedSearch];
  globalState.filteredDevs = [...jsonWithImprovedSearch];

  globalState.loadingData = false;

}


function handleInputChange({ target }) {
  globalState.currentFilter = target.value.toLocaleLowerCase().trim();
  filterDevs();
}


function handleCheckboxClick({ target }) {
  const { id, checked } = target;
  const { checkboxes } = globalState;
  
  const checkboxToChange = checkboxes.find(
    (checkbox) => checkbox.filter === id
  );
  checkboxToChange.checked = checked;
  filteredDevs();
}

function handleRadioClick({target}) {
  const radioId = target.id;
  
  globalState.radioAnd = radioId === "radioAnd";
  globalState.radioOr = radioId === "radioOr";

  filterDevs();
}

function getOnlyLanguagesFrom(programmingLanguages) {
  return programmingLanguages.map((item) => item.language.toLocaleLowerCase()).sort();
}

function removeAccentMarksFrom(text) {
  const WITH_ACCENT_MARKS = "áãâäàéèêëíìîïóôõöòúùûüñ".split("");
  const WITHOUT_ACCENT_MARKS = "aaaaaeeeeiiiiooooouuuun".split("");
  const newText = text
    .toLocaleLowerCase()
    .split("")
    .map((char) => {
      const index = WITH_ACCENT_MARKS.indexOf(char);
      if (index > -1) {
        return WITHOUT_ACCENT_MARKS[index];
      }
      return char;
    })
    .join("");
  return newText;
}
function filterDevs() {
  const { allDevs, radioOr, currentFilter, checkboxes } = globalState;


  const filterDevs = checkboxes
    .filter(({ checked }) => checked)
    .map(({ filter }) => filter)
    .sort();

  let filteredDevs = allDevs.filter(({ searchLanguages }) => {

    return radioOr
      ? filterDevs.some((item) => searchLanguages.includes(item))
      : filterDevs.join("") === searchLanguages.join("");
  });


  if (currentFilter) {
    filteredDevs = filteredDevs.filter(({ searchName }) =>
      searchName.includes(currentFilter)
    );
  }

  globalState.filteredDevs = filteredDevs;

  renderDevs();
}

function filteredDevs() {
  const { allDevs, radioOr, currentFilter, checkboxes } = globalState;
  const filterDevs= checkboxes
    .filter(({ checked }) => checked)
    .map(({ filter }) => filter)
    .sort();
  let filteredDevs = allDevs.filter(({ searchLanguages }) => {
    return radioOr
      ? filterDevs.some((item) => searchLanguages.includes(item))
      : filterDevs.join("") === searchLanguages.join("");
  });
  if (currentFilter) {
    filteredDevs = filteredDevs.filter(({ searchName }) =>
      searchName.includes(currentFilter)
    );
  }
  /**
   * Definimos os países filtrados no estado do app
   * e invocamos a função de renderização em seguida.
   */
  globalState.filteredDevs = filteredDevs;
  renderDevs();
}

function renderDevs() {
  const { filteredDevs } = globalState;
  const devsToShow = filteredDevs
  .map((dev) => {
    return renderDev(dev);
  })
  .join("");

  const renderedHTML =
  `
  <div>
   <h2> ${filteredDevs.length} Pessoa(s) encontrada (s)</h2>

   <div class="row">
    ${devsToShow}
   </div>
  </div>
  `;

globalDivDevs.innerHTML = renderedHTML;
}


function renderDev(dev) {
  const {name, picture, searchLanguages } = dev;
  return  `
      <div class='devs'>
        <div>
        <img src="${picture}" alt="${name}">
         
        </div>
        <div>
          <ul>
            <li>${name}</li>
            <li>${renderLanguages(searchLanguages)}</li>
          </ul>
        </div>
      </div>  
    `;

  };

function renderLanguages(languages) {
  
  const{ checkboxes } = globalState;
  return languages
  .map((language) => {
    const item = checkboxes.find((item) => item.filter === language);
    return `
    <img class='img-language' src="${item.image}" alt="${item.description}" />`
  });
}
start();