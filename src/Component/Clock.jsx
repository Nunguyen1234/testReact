// import React, { useState } from 'react';

// function Clock() {
//     const [state, setState] = useState({
//         time: {
//             created: new Date().toLocaleTimeString(), // lấy giờ hiện tại
//         },
//         seconds: {
//             created: new Date().getSeconds(), // lấy giờ giây hiện tại
//         },
//     });

//     const getTime = () => { // cập nhật
//         setState({
//             ...state, // truyền phần code của seconds
//             time: {
//                 created: new Date().toLocaleTimeString(),
//             },
//         });
//     };
//     return (
//         <div>
//             <h1>Yo, world!</h1>
//             <h2>Time: {state.time.created}.</h2>
//             <h3>Seconds: {state.seconds.created}</h3>
//             <button onClick={getTime}>Get Time</button>
//         </div>
//     );
// }

// export default Clock;

// import React, { useState, useEffect } from 'react';
// function Clock() {
//     const [time, setTime] = useState(new Date().toLocaleTimeString());
//     useEffect(() => {
//         console.log('Time changed:', time);
//     }, [time]);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTime(new Date().toLocaleTimeString());
//         }, 1000);

//         return () => {
//             clearInterval(timer); // Dọn dẹp timer khi component unmount
//         };
//     }, []); // Mảng rỗng: effect chỉ chạy khi mount/unmount

//     return (
//         <div>
//             <h1>Yo, world!</h1>
//             <h2>Now is {time}.</h2>
//         </div>
//     );
// }

// export default Clock;

import React from 'react';

function Greeting({ name }) {
    console.log();

    return <h1>Yo, {name}!</h1>;

}

Greeting.defaultProps = {
    name: "Stranger",
};

export default Greeting;
