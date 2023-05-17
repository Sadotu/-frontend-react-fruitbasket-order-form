import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button/Button"
import "./Form.css"

function Form() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <div className="input-container">
                    <label className="form-label">Voornaam: </label>
                    <Input
                        inputType="text"
                        inputName="firstName"
                        inputId="firstName"
                        validationRules={{ required: "Dit veld is verplicht" }}
                        register={register}
                        error={errors}
                    />
                </div>
                <div className="input-container">
                    <label className="form-label">Achternaam: </label>
                    <Input
                        inputType="text"
                        inputName="lastName"
                        inputId="lastName"
                        validationRules={{ required: "Dit veld is verplicht" }}
                        register={register}
                        error={errors}
                    />
                </div>
                <div className="input-container">
                    <label className="form-label">Leeftijd: </label>
                    <Input
                        inputType="number"
                        inputName="age"
                        inputId="age"
                        validationRules={{ required: "Dit veld is verplicht" }}
                        register={register}
                        error={errors}
                    />
                </div>
                <div className="input-container">
                    <label className="form-label">Postcode: </label>
                    <Input
                        inputType="text"
                        inputName="postcode"
                        inputId="postcode"
                        validationRules={{ required: "Dit veld is verplicht" }}
                        register={register}
                        error={errors}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="deliveryFrequency">Bezorgfrequentie:</label>
                    <select id="deliveryFrequency" {...register("deliveryFrequency")}>
                        <option value="everyday">Iedere dag</option>
                        <option value="weekly">Iedere week</option>
                        <option value="monthly">Iedere maand</option>
                    </select>
                </div>
                <div className="input-container">
                    <label>Bezorgtijd:</label>
                    <div>
                        <label className="radio-label">
                            <input
                                type="radio"
                                value="day"
                                {...register("deliveryTime")}
                            />
                            Overdag
                        </label>
                    </div>
                    <div>
                        <label className="radio-label">
                            <input
                                type="radio"
                                value="evening"
                                {...register("deliveryTime")}
                            />
                            's Avonds
                        </label>
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor="comments">Opmerkingen:</label>
                    <textarea id="comments" {...register("comments")} />
                </div>
                <div className="input-container">
                    <label className="radio-label">
                        <input
                            type="checkbox"
                            {...register("agreed", { required: "Dit veld is verplicht" })}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                </div>
                <Button
                    className="general-button"
                    buttonType="submit"
                >Verzend</Button>
            </div>
        </form>
    );
}

export default Form;
