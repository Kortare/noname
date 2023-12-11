document.addEventListener('DOMContentLoaded', function () {
    const allLonButton = document.querySelector('#AllControlL button a[href="#AllLon"]');
    const allLoffButton = document.querySelector('#AllControlL button a[href="#AllLoff"]');
    
    const light1OnButton = document.querySelector('#ControlL1 button a[href="#L1on"]');
    const light1OffButton = document.querySelector('#ControlL1 button a[href="#L1off"]');
    
    // เพิ่มปุ่ม "on" และ "off" สำหรับทุกระบบไฟ
    const light2OnButton = document.querySelector('#ControlL2 button a[href="#L2on"]');
    const light2OffButton = document.querySelector('#ControlL2 button a[href="#L2off"]');
    
    const light3OnButton = document.querySelector('#ControlL3 button a[href="#L3on"]');
    const light3OffButton = document.querySelector('#ControlL3 button a[href="#L3off"]');
    
    const light4OnButton = document.querySelector('#ControlL4 button a[href="#L4on"]');
    const light4OffButton = document.querySelector('#ControlL4 button a[href="#L4off"]');
    
    const light5OnButton = document.querySelector('#ControlL5 button a[href="#L5on"]');
    const light5OffButton = document.querySelector('#ControlL5 button a[href="#L5off"]');

    if (allLonButton) {
        allLonButton.addEventListener('click', function (event) {
            event.preventDefault();
            setVariable('AllL', 1);
            setVariable('L1', 1);
            setVariable('L2', 1);
            setVariable('L3', 1);
            setVariable('L4', 1);
            setVariable('L5', 1);
        });
    }

    if (allLoffButton) {
        allLoffButton.addEventListener('click', function (event) {
            event.preventDefault();
            setVariable('AllL', 0);
            setVariable('L1', 0);
            setVariable('L2', 0);
            setVariable('L3', 0);
            setVariable('L4', 0);
            setVariable('L5', 0);
        });
    }

    if (light1OnButton) {
        light1OnButton.addEventListener('click', function (event) {
            event.preventDefault();
            
        });
    }

    if (light1OffButton) {
        light1OffButton.addEventListener('click', function (event) {
            event.preventDefault();
            setVariable('L1', 0);
        });
    }

    // เพิ่มโค้ดสำหรับไฟที่ 2, 3, 4, และ 5 ตามลำดับ

    if (light2OnButton) {
        light2OnButton.addEventListener('click', function (event) {
            event.preventDefault();
            setVariable('L2', 1);
        });
    }

    if (light2OffButton) {
        light2OffButton.addEventListener('click', function (event) {
            event.preventDefault();
            setVariable('L2', 0);
        });
    }

    // ทำเช่นเดียวกับไฟที่ 3, 4, และ 5

    if (light3OnButton) {
        light3OnButton.addEventListener('click', function (event) {
            event.preventDefault();
            setVariable('L3', 1);
        });
    }

    if (light3OffButton) {
        light3OffButton.addEventListener('click', function (event) {
            event.preventDefault();
            setVariable('L3', 0);
        });
    }

    // ทำเช่นเดียวกับไฟที่ 4, และ 5

    if (light4OnButton) {
        light4OnButton.addEventListener('click', function (event) {
            event.preventDefault();
            setVariable('L4', 1);
        });
    }

    if (light4OffButton) {
        light4OffButton.addEventListener('click', function (event) {
            event.preventDefault();
            setVariable('L4', 0);
        });
    }

    // ทำเช่นเดียวกับไฟที่ 5

    if (light5OnButton) {
        light5OnButton.addEventListener('click', function (event) {
            event.preventDefault();
            setVariable('L5', 1);
        });
    }

    if (light5OffButton) {
        light5OffButton.addEventListener('click', function (event) {
            event.preventDefault();
            setVariable('L5', 0);
        });
    }

    function setVariable(variableName, value) {
        window[variableName] = value;
        console.log(`${variableName} is set to ${value}`);
    }
});
