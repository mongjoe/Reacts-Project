1. Two-way data binding trong React: 

  **Khái niệm: Là một kỹ thuật cho phép cập nhật trạng thái giữa component cha và component con một cách đồng bộ. Khi sử dụng two-way data binding, thay đổi trạng thái ở component con sẽ ảnh hưởng trực tiếp đến trạng thái của component cha và ngược lại.
 
Trong React, two-way data binding thường được thực hiện thông qua việc sử dụng một giá trị state trong component cha và truyền giá trị state này xuống cho component con thông qua props. Khi component con thay đổi giá trị, nó gửi một sự kiện hoặc callback lên component cha để cập nhật giá trị state. Sau khi giá trị state được cập nhật, React sẽ tự động render lại các component liên quan để hiển thị giá trị mới.

  **Ví dụ, giả sử có một component cha là ParentComponent và một component con là ChildComponent. Trạng thái được chia sẻ giữa hai component là value. Để thực hiện two-way data binding, ta thực hiện các bước sau:

   -Trong ParentComponent, khai báo giá trị state value và một hàm handleChange để cập nhật giá trị state:

import React, { useState } from 'react';

const ParentComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <ChildComponent value={value} handleChange={handleChange} />
    </div>
  );
};

export default ParentComponent;

   -Trong ChildComponent, sử dụng props value để hiển thị giá trị và sử dụng props handleChange để gọi hàm cập nhật giá trị:

import React from 'react';

const ChildComponent = ({ value, handleChange }) => {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default ChildComponent;

 -Khi người dùng nhập vào ô input trong ChildComponent, sự kiện onChange được kích hoạt và gọi hàm handleChange trong ParentComponent. Hàm này sẽ cập nhật giá trị state value, và sau đó React tự động render lại ParentComponent và ChildComponent với giá trị mới.

Qua đó, giá trị state value giữa ParentComponent và ChildComponent được cập nhật đồng bộ, tạo nên two-way data binding trong React.

  **Lưu ý: Kỹ thuật two-way data binding trong React có thể được thực hiện thông qua thư viện bên ngoài như react-binding hoặc mobx-react.


2. Context trong React:

  2.1
  
  **Khái niệm

Data trong ứng dụng React thường truyền đến component thông qua prop.Khi sử dụng prop thì data được truyền từ component cha đến component con.

Tuy nhiên,  có thể truyền data trong toàn bộ app mà không phải truyền prop qua từng tầng component khi sử dụng React Context. 

  **Cách sử dụng React Context
 
- Ví dụ : tạo dữ liệu Food chứa name và location trong context, truyền nó đến 2 components khác nhau và cập nhật giá trị dữ liệu từ 1 component khác.

Khởi tạo project react js

Run : npx create-react-app learn-useContext

Cấu trúc folder như sau:


a. Tạo Food Context
Trong FoodContext.jsx  sẽ khởi tạo một Context object sử dụng createContext API.

import React, { createContext, useState } from 'react'
// Initiate Context
const FoodContext = createContext();
// Provide Context
export const FoodProvider = ({ children }) => {
  const [name, setName] = useState('Trà Xanh');
  const [location, setLocation] = useState('Thái Nguyên');
  return (
    <FoodContext.Provider value={{ name, location, setName, setLocation }}>
      {children}
    </FoodContext.Provider>
  )
}

export default FoodContext;

Tạo hàm provider để cung cấp context vừa khởi tạo. Hàm này sẽ là cha của tất cả component khác trong ứng dụng này.

Và những dữ liệu trong value như name,location,setName… sẽ có thể được truy cập từ tất cả child components.

Cuối cùng là export FoodContext để tất cả child components của FoodProvider có thể sử dụng.

b. Wrap the App component với Context.
Context là global variable.

Để context data có sẵn trong toàn bộ ứng dụng thì trong index.js  import FoodProvider và wrap <App /> .

Cụ thể như sau:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FoodProvider } from './FoodContext';

ReactDOM.render(
  <FoodProvider>
    <App />
  </FoodProvider>,
  document.getElementById('root')
);

c. Sử dụng name và location trong components.
Trong NameComponent.jsx import FoodContext dùng hook useContext.

import React,{ useContext } from 'react';
import FoodContext from '../FoodContext';

const NameComponent = () =>{
  //Retrieve context data
  const food = useContext(FoodContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        <strong>Name</strong>: {food.name}
      </h2>
    </div>
  )
}

Tương tự với LocationComponent.jsx

import React, { useContext } from 'react';
import FoodContext from '../FoodContext';

const LocationComponent = () => {
  // Retrieve context data
  const food = useContext(FoodContext);

  return (
    <div style={{ marginTop: "30px", marginLeft: "50px"}}>
      <h2 className="is-size-4">
        <strong>Location</strong>: {food.location}
      </h2>
    </div>
  )
}

d. Cách update data trong context   
Tương tự, trong FoodForm.jsxta cũng import FoodContext và sử dụng hook useContext để lấy context data.

import React,{ useContext } from 'react';
import FoodContext from './FoodContext';

const FoodForm = () => {
  // Retrieve context data
  const food = useContext(FoodContext);

  return (
    <div className = "food-form" >
      <div className="input-item">
        <label className="label" style={{ marginRight: "28px" }}>Update Name: </label>
        <input
          className="input"
          onChange={e => food.setName(e.target.value)}
        />
      </div>

      <div className="input-item">
        <label className="label" >Update Location: </label>
        <inputD
          className="input"
          onChange={e => food.setLocation(e.target.value)}
        />
      </div>
    </div>
  )
}
export default FoodForm;


2.2 Vấn đề mà Context giải quyết được so với cách dùng State và truyền dữ liệu giữa thành phần cha con:

 - Nếu không có React Context,  sẽ phải sử dụng kỹ thuật là “prop drilling” trong đó  sẽ phải truyền data xuống các component mặc dù một số component không cần dữ liệu đó.

 - Ví dụ :

Giả sử có data là một số có giá trị là 10 và  cần sử dụng data đó trong component Red và Green.

Sử dụng “prop drilling” sẽ cần gửi data từ component Red đến Blue sau đó mới gửi data đến Green được.

Vậy ở đây gửi data đến component Blue chỉ để truyền nó xuống cho Green.

Việc sử dụng “prop drilling” thì việc truyền dữ liệu đến các component con lồng nhau sâu sẽ rất cồng kềnh.

Do đó, React Context xuất hiện để khắc phục những nhược điểm của “prop drilling”.

React Context sẽ cho phép  có thể tạo data và truyền nó với một provider đến tất cả component trong ứng dụng React mà không cần dùng “prop drilling”.

