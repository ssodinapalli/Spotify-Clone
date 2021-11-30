import * as yup from 'yup';
const nameRegExp = /^[a-zA-Z]*$/g; // name regex allows only alphabets
const schema = yup.object().shape({
	firstName:yup.string().max(10).required("firstname is mandatory").matches(nameRegExp),
	lastName:yup.string().max(10).required("lastname is mandatory").matches(nameRegExp),
	email:yup.string().email().required(),
	password:yup.string().min(3).max(10),
	confirmPassword: yup.string().oneOf([yup.ref("password"), null]), // refering password field

})

export {nameRegExp , schema}