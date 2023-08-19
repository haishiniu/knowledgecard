import SingleFQA from "./SingleFQA";
import faqsData from "./faqsData";

const FAQs = () => {
  let faqsData1 = faqsData.filter(function (faq) {
      if(faq.id % 3 == 1){
          return faq;
      }
  });

  let faqsData2 = faqsData.filter(function (faq) {
    if(faq.id % 3 == 2){
        return faq;
    }
  });

  let faqsData3 = faqsData.filter(function (faq) {
    if(faq.id % 3 == 0){
        return faq;
    }
  });
 

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative overflow-hidden bg-slate-50 py-20 sm:py-32">
      <img alt="" src="/images/faqs/background-faqs.55d2e36a.jpg" width="1558" height="946" decoding="async" data-nimg="future" className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]" loading="lazy" style={{color: "transparent"}} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 id="faq-title" className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.</p>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">

          <li>
            <ul role="list" className="flex flex-col gap-y-8">
            {faqsData1.map((faq) => (
              <SingleFQA key={faq.id} faq={faq} />
            ))}
            </ul>
          </li>

          <li>
            <ul role="list" className="flex flex-col gap-y-8">
            {faqsData2.map((faq) => (
              <SingleFQA key={faq.id} faq={faq} />
            ))}
            </ul>
          </li>

          <li>
            <ul role="list" className="flex flex-col gap-y-8">
            {faqsData3.map((faq) => (
              <SingleFQA key={faq.id} faq={faq} />
            ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>

  );
};

export default FAQs;
