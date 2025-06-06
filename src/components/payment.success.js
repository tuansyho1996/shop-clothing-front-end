import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PaymentSuccess = () => {
  const router = useRouter();
  const { paymentId, PayerID } = router.query;

  useEffect(() => {
    if (paymentId && PayerID) {
      fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/execute-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentId, PayerID }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.payment) alert('Payment successful!');
        });
    }
  }, [paymentId, PayerID]);

  return <div>Payment is being processed...</div>;
};

export default PaymentSuccess;
