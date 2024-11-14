import { useState } from "react";

function ColorPicker(){

    const[color, setColor] = useState('#FFFFFF');

function handleColorPicker(event){
    setColor(event.target.value);
}

return(
    
    <div className="color-picker-contaner">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
            <p>Selected Color: {color}</p>
        </div>
        <div className="inputColor">
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorPicker}></input>
        </div>
    </div>
);
}

export default ColorPicker    