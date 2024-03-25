import React from "react";

const SuccesPage = () => {
  return (
    <div>
      <div className="h-[50vh] flex gap-5 flex-col justify-center px-2 mt-5 md:mt-9">
        <div className="bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-success">
          <p className="text-xl font-bold text-center text-success mb-2">
            <strong>FELICITATION !!</strong>
          </p>
          <p className="text-lg font-bold text-center">
            T&apos;as demande de{" "}
            <strong className="text-accent">réservation </strong> à été envoyé !
          </p>
          <p className="text-lg font-bold text-center">
            <strong className="text-accent">Merikos </strong> va bientôt te
            recontacter !
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccesPage;
