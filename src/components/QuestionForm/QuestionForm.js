import React from 'react';
import styles from './QuestionForm.module.css'
import {useForm} from "react-hook-form";

const QuestionForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm({mode: "onBlur"});

    const onFormSubmit = (data) => {
        console.log(data)
    }

    return (
        <section className={styles.question}>
            <h2>Question? We are here to help!</h2>

            <form className={styles.inputs}
                onSubmit={handleSubmit(onFormSubmit)}>
                <div className={styles.inputs_left}>
                <span>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", {
                            required: "This field is required"
                        })}
                    />
                    {errors.name && <small>{errors.name.message}</small>}
                </span>

                <span>
                <label htmlFor="message">Message</label>
                    <textarea
                        id="email"
                        rows="4"
                        cols="40"
                        {...register("message", {
                            required: "This field is required",
                            minLength: {
                                value: 50,
                                message: "Try to be more specific with your question (type at least 50 characters)"
                            }
                        })}
                    />
                    {errors.message && <small>{errors.message.message}</small>}
                </span>

                <button type="submit" className={styles.submit_btn}>SEND</button>
                </div>

                <span>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "This field is required"
                        })}
                    />
                    {errors.email && <small>{errors.email.message}</small>}
                </span>
            </form>
        </section>
    );
};

export default QuestionForm;