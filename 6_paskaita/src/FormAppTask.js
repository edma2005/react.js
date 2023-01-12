import {useState} from 'react';

function FormAppTask() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [ifRegistered, setIfRegistered] = useState(false);
  const [form, setForm] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if(name && lastName && company && email && areaCode && phone && subject){
      const newEvent = {
     
        name: `${name} ${lastName}`,
        company: company,
        email: email,
        phone: `${areaCode} ${phone}`,
        subject: subject,
        isRegistered: ifRegistered,
      }
      setForm([...form, newEvent]);
      return console.log(form);

    } else {
     return console.log('bad form request');
    }
  }

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <h2>EVENT REGISTRATION FORM</h2>
        <div className='row'>
        <label htmlFor='name'>Name</label>
          <div className='inpCont'>
            <input type="text" name="name" id="name"
            value={name} onChange={event => setName(event.target.value)} />
            <span className='placeholder'>First Name</span>
          </div>
          <div className='inpCont'>
            <input type="text" name="name" id="name" value={lastName} onChange={event => setLastName(event.target.value)}/>
            <span className='placeholder'>Last Name</span>
          </div>
        </div>
        <div className='row regularRow'>
          <label htmlFor='company'>Company</label>
          <input type="text" name="company" id="company" value={company} onChange={event => setCompany(event.target.value)}/>
        </div>
        <div className='row regularRow'>
          <label htmlFor='email'>Email</label>
          <input type="email" name="email" id="email" placeholder='example@email.com' value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        <div className='row'>
          <label htmlFor='phone'>Phone</label>
          <div className='inpCont'>
            <input type="text" name="areaCode" id="areaCode" value={areaCode} onChange={event => setAreaCode(event.target.value)} />
            <span>Area Code</span>
          </div>
          <div className='inpCont'>
            <input type="text" name="phone" id="phone" value={phone} onChange={event => setPhone(event.target.value)}/>
            <span>Phone Number</span>
          </div>
        </div>
        <div className='row regularRow'>
          <label htmlFor="options">Subject</label>
          <select name="options" id="options" value={subject} onChange={e=>setSubject(e.target.value)} required>
            <option disabled value=''>Choose Option</option>
            <option onSelect={()=>setSubject('birthday')}>Birthday Party</option>
            <option onSelect={()=>setSubject('wedding')} >Wedding</option>
            <option onSelect={()=>setSubject('reunion')}>Family Reunion</option>
          </select>
        </div>
        <div>
          <p>Are you an existing customer?</p>
          <div>
            <input type="radio" name="ragistered" id="yes" onChange={()=> setIfRegistered(true)}/>
            <label htmlFor="yes">Yes</label>
          </div>
          <div>
            <input type="radio" name="ragistered" id="no" onChange={()=> setIfRegistered(false)}/>
            <label htmlFor="no">No</label>
          </div>
       
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default FormAppTask;