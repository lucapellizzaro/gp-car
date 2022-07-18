import Button from "./button";

import Botpoison from "@botpoison/browser";
import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_ID;
const botpoison = new Botpoison({
  publicKey: process.env.NEXT_PUBLIC_BOTPOISON_ID,
});

export default function Contactform() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const { solution } = await botpoison.challenge();
    await submit({ fullname, email, phone, message, _botpoison: solution });
    alert(
      "Messaggio inviato, grazie della tua richiesta. Risponderemo fra breve."
    );
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-y-6">
      <div>
        <label htmlFor="full-name" className="sr-only">
          Nome
        </label>
        <input
          required
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          type="text"
          name="full-name"
          id="full-name"
          autoComplete="name"
          className="block w-full py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded"
          placeholder="Nomimativo o azienda"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="block w-full py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded"
          placeholder="Indirizzo e-mail"
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">
          Telefono
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          type="text"
          name="phone"
          id="phone"
          autoComplete="tel"
          className="block w-full py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded"
          placeholder="Telefono"
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Messaggio
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          name="message"
          rows={4}
          className="block w-full py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border border-gray-300 rounded"
          placeholder="Scrivi un messaggio o richiesta"
        />
      </div>
      <div className="flex items-start">
        <input
          required
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 mt-1 text-primary focus:ring-primary border-gray-300 rounded"
        />
        <label htmlFor="remember-me" className="ml-3 block text-sm">
          Ho letto l&#39;informativa privacy e acconsento alla memorizzazione
          dei miei dati nel vostro archivio secondo quanto è stabilito dal
          regolamento europeo per la protezione dei dati personali n.679/2016
          GDPR{" "}
        </label>
      </div>
      <div>
        <Button disabled={submitting}>Inoltra messaggio</Button>
      </div>
    </form>
  );
}
