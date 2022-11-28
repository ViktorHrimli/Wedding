import styled from "./Form.module.scss";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  const handleSubmitForm = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitForm)} className={styled.form}>
        <label>
          Name
          <input
            type="text"
            {...register("name", {
              required: "Field reqired",
              minLength: 3,
            })}
          />
        </label>
        {errors?.name && <span>{errors.name.message || "Error"}</span>}
        <label>
          Phone
          <input
            type="text"
            {...register("phone", {
              minLength: {
                value: 5,
                message: "Min length 5",
              },
              placeholder: "+380 XXX XX XX",
              required: "Field required",
            })}
          />
        </label>
        {errors?.phone && <span>{errors.phone.message || "Error"}</span>}

        <label>
          Email{" "}
          <input
            type="text"
            {...register("email", {
              required: "Field required",

              minLength: {
                value: 5,
                message: "Min length 5",
              },
            })}
          />
        </label>
        {errors?.email && <span>{errors.email.message || "Error"}</span>}
        <button type="submit" disabled={!isValid}>
          Отпрвить
        </button>
      </form>
    </div>
  );
};

export default Form;
