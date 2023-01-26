import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  // je mets ici mon code pour la soumission du form

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm();
  const onSubmit = (formulaire) => {
    console.log(formulaire);
    alert(JSON.stringify(formulaire));
    axios
      .post("http://localhost:5500/infos", formulaire)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            action="/"
            method="post"
          >
            <div>
              <label
                htmlFor="pseudo"
                className="block text-sm font-medium text-gray-700"
              >
                Ton pseudo
              </label>
              <div class="mt-1">
                <input
                  {...register("pseudo", {
                    required: true,
                    minLength: 3,
                    maxLength: 10,
                  })}
                  id="pseudo"
                  name="pseudo"
                  type="text"
                  autocomplete="text"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {errors.pseudo && (
                  <span className="block text-sm font-medium text-red-700">
                    Ton pseudo doit faire entre 3 et 10 caractères
                  </span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="telephone"
                className="block text-sm font-medium text-gray-700"
              >
                Ton numéro de <i className="fa-solid fa-mobile"></i>
              </label>
              <div className="mt-1">
                <input
                  id="telephone"
                  name="telephone"
                  type="telephone"
                  {...register("telephone", {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                    pattern: /^(06|07)[0-9]{8}$/,
                  })}
                  autocomplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {errors.telephone && (
                  <span className="block text-sm font-medium text-red-700">
                    Ton numéro doit être de 10 chiffres et commencer par 06 ou
                    07
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                value="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Inscription
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
