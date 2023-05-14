import React, { useState, useRef } from 'react';
import InputMask from 'react-input-mask';

export const RequestForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setPhoneValid] = useState(false);
  const [isNameValid, setNameValid] = useState(false);
  const [isTouched, setTouched] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<InputMask>(null);

  const validateName = (value: string) => {
    const isValid = value.trim().length > 0 && value.trim().length < 25;
    setNameValid(isValid);
    return isValid;
  };

  const validatePhone = (value: string) => {
    const phoneValue = value.replaceAll(/[-+()_]/g, '');
    const isValid = phoneValue.length === 11 && /^7\d{10}$/.test(phoneValue);
    setPhoneValid(isValid);
    return isValid;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const isFormValid = validateName(name) && validatePhone(phone);
    setTouched(true);
    if (isFormValid) {
      // eslint-disable-next-line no-alert
      alert(`Спасибо за заявку ${name}! Мы скоро с вами свяжемся!`);
      setName('');
      setPhone('');
    }
  };
  return (
    <form
      className="flex items-center flex-col max-w-[970px] w-full rounded-[20px] min-h-[494px] bg-gray pt-[59px] z-20 sm:min-h-[400px] sm:rounded-none sm:pt-[40px] sm:px-[35px]"
      id="contact-us"
      onSubmit={handleSubmit}
    >
      <h3 className="text-center text-[40px] leading-[49px] font-semibold text-white mb-[46px] sm:text-[30px] sm:leading-[37px] sm:mb-[36px]">
        Оставить заявку
      </h3>
      <div className="w-full max-w-[370px] flex flex-col gap-y-[20px] mb-[65px] sm:mb-[35px]">
        <input
          className={`input ${isTouched && !isNameValid && 'border-[tomato]'}`}
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => {
            const { value } = e.target;
            setName(value);
            setNameValid(validateName(value));
          }}
          ref={nameRef}
        />
        <InputMask
          mask="+7(999)99-999-99"
          value={phone}
          onChange={(e) => {
            const { value } = e.target;
            setPhone(value);
            setPhoneValid(validatePhone(value));
          }}
          className={`input ${isTouched && !isPhoneValid && 'border-[tomato]'}`}
          type="tel"
          placeholder="Номер телефона"
          ref={phoneRef}
        />
      </div>
      <button
        type="submit"
        className="bg-potato text-[#333333] text-[20px] leading-[24px] rounded-[130px] py-[13px] max-w-[240px] w-full font-medium hover:bg-lightYellow"
      >
        Оставить заявку
      </button>
    </form>
  );
};
