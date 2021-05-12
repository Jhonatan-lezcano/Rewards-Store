import { useEffect, useState } from "react";
import { setPoints } from "../services/services";

export const usePoints = (amount) => {
  const [modalPoints, setModalPoints] = useState(false);

  useEffect(() => {
    switch (amount) {
      case 1000:
        setPoints(amount);
        break;
      case 5000:
        setPoints(amount);
        break;
      case 7500:
        setPoints(amount);
        break;
      default:
        break;
    }
  }, [amount]);

  return { modalPoints, setModalPoints };
};
