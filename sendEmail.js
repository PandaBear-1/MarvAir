import emailjs from '@emailjs/browser';

export const sendBookingEmail = (formData, flight) => {
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      departure: flight.departure,
      destination: flight.destination,
      time: flight.time,
      date: flight.date,
      price: flight.price
    };

    return emailjs.send(
        'service_lmp0ryr',
        'template_1tkbwpk',
        templateParams,
        'bztF0qwfOViSuAhiL' 
    );
};