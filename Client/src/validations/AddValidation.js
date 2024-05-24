import * as Yup from 'yup';

export const WineAddSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    price: Yup.number().required('Required'),
    imgSrc: Yup.string().url('Invalid email').required('Required'),
});