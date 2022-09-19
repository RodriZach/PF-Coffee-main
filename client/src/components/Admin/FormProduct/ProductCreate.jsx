import React from "react";
import { useForm } from "react-hook-form";
import { titleValidator } from "./validators";
import { postProduct } from "../../../redux/actions"; //2
import { useDispatch, useSelector } from "react-redux";

import 'react-datepicker/dist/react-datepicker.css';
import "bootstrap/dist/css/bootstrap.min.css";
import style from './ProductCreate.module.css';

// https://reactdatepicker.com/

const FormularioProducto = () => {
  const dispatch = useDispatch();
  var diet = useSelector((state) => state.diets);


  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    defaultValues: {
      title: 'Café café tinto',
      cost: '5',                          //*
      margin: '50',                      //*
      price: '',                         //*
      description: 'client',              //*
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/18/8d/1a/cafe-tinto-de-la-sierra.jpg',
      // disable: false,
      like: '5',
      stock: '10',
      diet: 'dairy free',
    }
  });
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    dispatch(postProduct(data));
    alert('User create successfuly!');
    e.target.reset();
  }

  return <div>
    <h2>Producto</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id="Nombre" className="mb-3">
        <label
          for='title'
          className="form-label"
        >Nombre</label>
        <input
          id='title'
          className="form-control"
          type="text"
          placeholder="Nombre del Producto"
          maxLength={50}
          autoFocus
          {...register('title', {
            required: true,
            // minLength: 1, está en la función externa validators
            maxLength: 50,
            pattern: /^[A-Z][a-z][^$()!¡@#/=¿{}?*%&|<>#]*$/,
            validate: titleValidator
          })} />
        {errors.title?.type === 'validate' && <p className={style.p_form}>El campo nombre es requerido</p>}
        {errors.title?.type === 'maxLength' && <p className={style.p_form}>El campo nombre debe tener menos de 20 caracteres</p>}
        {errors.title?.type === 'pattern' && <p className={style.p_form}>Comience el nombre con letra mayúscula. Solo se aceptan los caracteres "":.,_-</p>}
      </div>
      <div id='Costo_Margen' className="row">
        <div id='Costo' className="col">
          <label
            for='cost'
            className="form-label"
          >Precio del Proveedor</label>
          <input
            id="cost"
            className="form-control"
            type="number"
            placeholder="5"
            {...register('cost', {
              required: false,
              pattern: /^\d{1,2}$/,

            })} />
          {errors.cost?.type === 'pattern' && <p className={style.p_form}>Solo se aceptan números</p>}
        </div>
        <div id="Margen" className="col">
          <label
            for='margin'
            className="form-label"
          >Margen</label>
          <input
            id="margin"
            className="form-control"
            type="number"
            placeholder="5"
            {...register('margin', {
              required: false,
              pattern: /^\d{1,2}$/,

            })} />
          {errors.margin?.type === 'pattern' && <p className={style.p_form}>Solo se aceptan números</p>}
        </div>
      </div>

      <div id="PrecioPublico" className="mb-3">
        <label
          for="price"
          className="form-label"
        >Precio al Público</label>
        <p className={style.p_form}>Sugerido: {Math.round((watch('cost') * ((watch('margin') / 100) + 1)))}</p>
        {/* <p className={style.p_form}>Valor: {((watch('cost') * ((watch('margin') / 100) + 1)))}</p> */}
        <input
          id="price"
          className="form-control"
          type="number"
          {...register('price', {
            required: true,
            pattern: /^\d{1,2}$/,

          })} />
        {errors.price?.type === 'required' && <p className={style.p_form}>Campo obligatorio</p>}
        {errors.price?.type === 'pattern' && <p className={style.p_form}>Solo se aceptan números</p>}
      </div>
      <div id="Descripcion" className="mb-3">
        <label
          for='description'
          className="form-label"
        >Descripción del Producto</label>
        <textarea
          id="description"
          className="form-control"
          type="text"
          placeholder="Opcional"
          {...register('description', {
            required: true,
            maxLength: 400,
            pattern: /^[A-Za-z]+$/i,
          })} />
        {errors.description?.type === 'required' && <p className={style.p_form}>Campo requerido</p>}
        {errors.description?.type === 'required' && <p className={style.p_form}>Excede al máximo de caracteres</p>}
        {errors.description?.type === 'pattern' && <p className={style.p_form}>Agregar description con solo letras</p>}
      </div>
      <div id="Imagen" className="mb-3">
        <label
          for='image'
          className="form-label"
        >Imágen del Producto</label>
        <input
          id="image"
          className="form-control"
          type="url"
          placeholder="📷 URL"
          {...register('image', {
            required: false,
            maxLength: 100,
            pattern: /(https?:\/\/.*\.(?:png|jpg))/,
          })} />
        {errors.image?.type === 'required' && <p className={style.p_form}>Campo requerido</p>}
        {errors.image?.type === 'required' && <p className={style.p_form}>Excede al máximo de caracteres</p>}
        {errors.image?.type === 'pattern' && <p className={style.p_form}>Agregar description con solo letras</p>}
      </div>
      <div id="Cantidad" className="mb-3">
        <label
          for='stock'
          className="form-label"
        >Cantidad</label>
        <input
          id="stock"
          className="form-control"
          type="number"
          placeholder="🔢"
          {...register('stock', {
            required: true,
            pattern: /^\d{1,2}$/,
          })} />
        {errors.stock?.type === 'required' && <p className={style.p_form}>El campo es requerido</p>}
        {errors.stock?.type === 'pattern' && <p className={style.p_form}>Debe contener numeros</p>}
      </div>
      <div id="Desactivo" className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          {...register('disable')} />
        <label
          className="form-check-label"
          for="flexSwitchCheckDefault"
        >Desactivo</label>
      </div>
      <div id="Guardar" className="d-grid gap-2">
        <input className="btn btn-success" type="submit" value="Guardar" />
      </div>
    </form>
  </div>
}

export default FormularioProducto;