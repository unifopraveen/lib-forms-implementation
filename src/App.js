import './App.css';
import  {Forms} from '@unifo-unifi/lib-bulk-edit-form'


const formProps = {
  formProperties:{
    hScroll : false,
    vScroll : true,
  },
  formheader:{
    title: "Bulk Edit Notifications"
  }, 
  formBody : {
    noOfSections : 3,
    content : [{
      editable: false,       
      type: "Div",
      heading: "",
      noOfFields:1,
      field1:{
          label:" ",
          inputType: "SearchBar",
          noOfInputs: 1, // make the default as 1 in case of textFields 
          labelAndInputPosition: "" ,
          width:"90%",
          height:"",
          inputParameters:{searchIcon:"search.png", placeholder:"Search Notifications"},
          isRequired: false,
      }
    },
    {

    },
    {

    }],
    formFooter : {
      buttonNames:["Ok", "Cancel", "Apply"],
      contained: [0,2]
    }
  },
  
}


function App() {
  return (
    <div className="App">
    <Forms formProps={formProps}></Forms>
    </div>
  );
}

export default App;