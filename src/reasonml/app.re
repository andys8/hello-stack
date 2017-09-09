let component = ReasonReact.statelessComponent "App";

let make _children => {
  ...component,
  render: fun self => {
    let name = "ReasonML";
    let element = ReasonReact.stringToElement ("Hello, I'm " ^ name ^ ".");
    <div> element </div>    
  }
};