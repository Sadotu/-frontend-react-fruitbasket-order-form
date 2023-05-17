import React, {useState} from 'react';
import './App.css';
import Card from "./components/Card/Card";
import companyLogo from "./assets/screenshot-logo.png"
import Form from "./components/Form/Form";
import Button from "./components/Button/Button"

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);
    const [tangerine, setTangerine] = useState(0)

    function reset() {
        setBananas(0);
        setStrawberries(0);
        setApples(0);
        setKiwis(0);
        setTangerine(0)
    }

  return (
    <>
        <div className="outer-container-app">
            <header>
                <img src={companyLogo} alt="Company Logo"/>
            </header>
            <div className="inner-container-app">
                <div className="fruit">
                    <h1>Fruitmand bezorgservice</h1>
                    <Card
                        fruit="🍓 Aardbeien"
                        amount={strawberries}
                        setAmount={setStrawberries}
                    ></Card>
                    <Card
                        fruit="🍌 Bananen"
                        amount={bananas}
                        setAmount={setBananas}
                    ></Card>
                    <Card
                        fruit="🍏 Appels"
                        amount={apples}
                        setAmount={setApples}
                    ></Card>
                    <Card
                        fruit="🥝 Kiwis"
                        amount={kiwis}
                        setAmount={setKiwis}
                    ></Card>
                    <Card
                        fruit="🍊 Tangerine"
                        amount={tangerine}
                        setAmount={setTangerine}
                    ></Card>
                    <Button
                        className="general-button"
                        handleClick={ reset }
                    >Reset</Button>
                </div>
                <div className="form">
                    <Form/>
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
