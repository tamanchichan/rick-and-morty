import { useForm } from 'react-hook-form';

function NewCharacter() {
  const { register, handleSubmit, formState: {errors} } =
    useForm({
      defaultValues: {
        imageURL: '',
        name: '',
        gender: '',
        origin: '',
        status: ''
      }
    });
    
  return (
    <>
      <div className='center-form'>
        <h2>Add a New Character</h2>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          {/* <p>{errors.imageURL?.message}</p> */}
          <input
            {...register('imageURL', {
              required: '*'
            })}
            placeholder='image url'
            className={errors.imageURL ? 'required' : null}
          />
          {/* <p>{errors.name?.message}</p> */}
          <input
            {...register('name', {
              required: '*'
            })}
            placeholder='name'
            className={errors.name ? 'required' : null}
          />
          {/* <p>{errors.gender?.message}</p> */}
          <input
            {...register('gender', {
              required: '*'
            })}
            placeholder='gender'
            className={errors.gender ? 'required' : null}
          />
          {/* <p>{errors.origin?.message}</p> */}
          <input
            {...register('origin', {
              required: '*'
            })}
            placeholder='origin'
            className={errors.origin ? 'required' : null}
          />
          {/* <p>{errors.status?.message}</p> */}
          <input
            {...register('status', {
              required: '*'
            })}
            placeholder='status'
            className={errors.status ? 'required' : null}
          />
          <input type='submit' value='Add' />
        </form>
      </div>
    </>
  );
};

export default NewCharacter;