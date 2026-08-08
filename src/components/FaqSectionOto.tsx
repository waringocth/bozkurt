"use client";

import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "q1",
    question: "Araba anahtarım kayboldu, ne yapmalıyım?",
    answer:
      "Öncelikle sakin olun ve aracınızı güvenli bir yerde bıraktığınızdan emin olun. Ardından bizimle iletişime geçin; teknisyenimiz adresinize gelir ve araç başında yeni anahtar yapar. Araç markası ve modeli ile ruhsat bilgilerinizi hazır bulundurmanız işlemi hızlandırır. Çoğu araçta orijinal kalitede anahtar kesip programlama işlemi 30-60 dakika içinde tamamlanır. Çekici çağırmanıza gerek kalmaz.",
  },
  {
    id: "q2",
    question: "Çipli (immobilizer) anahtar kopyası yaptırabilir miyim?",
    answer:
      "Evet, çipli (transponder) anahtarlar kopyalanabilir. Elinizdeki orijinal anahtardan hem fiziksel kesim hem de çip programlaması yapıyoruz. Bazı araçlarda (özellikle yüksek güvenlikli modellerde) kopyalama yerine yeniden programlama gerekebilir. Hangi yöntemi kullanacağımızı araç modelinizi belirttikten sonra netleştirebiliriz. Tüm işlemler araç başında gerçekleşir.",
  },
  {
    id: "q3",
    question: "Hangi araba markalarına hizmet veriyorsunuz?",
    answer:
      "BMW, Mercedes-Benz, Volkswagen, Audi, Skoda, Seat, Toyota, Honda, Nissan, Hyundai, Kia, Ford, Renault, Peugeot, Citroën, Fiat, Opel, Volvo, Land Rover, Jeep ve daha birçok markaya hizmet veriyoruz. Avrupa, Asya ve Amerikan menşeli araçların büyük çoğunluğunda OBD arayüzlü profesyonel ekipmanımızla programlama yapabiliyoruz. Markanız hakkında emin olmak için bizi arayın.",
  },
  {
    id: "q4",
    question: "Oto anahtarcı nereye geliyor, servise götürmem gerekiyor mu?",
    answer:
      "Hayır, aracınızı servise götürmenize gerek yok. Teknisyenimiz belirttiğiniz adrese gelir — iş yeriniz, eviniz, otopark veya yol kenarı fark etmez. Tüm işlemler araç başında, sahada tamamlanır. Araç içinde kalan veya kaybolan anahtar durumlarında araç hareket ettirilmeden müdahale yapılabilir.",
  },
  {
    id: "q5",
    question: "Oto anahtar fiyatları ne kadar?",
    answer:
      "Fiyatlar araç markası, modeli, anahtar tipine (mekanik, transponder, akıllı anahtar, remote) ve gerekli programlama seviyesine göre önemli ölçüde değişmektedir. Standart mekanik anahtarlar en uygun fiyatlıyken, yüksek güvenlikli akıllı anahtarlar daha yüksek maliyetlidir. Araç bilgilerinizi WhatsApp veya telefon üzerinden iletirseniz yaklaşık fiyat bilgisi alabiliriz. Tüm fiyatlarımız şeffaftır; gizli ücret uygulanmaz.",
  },
];

export default function FaqSectionOto() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="sss"
      aria-labelledby="faq-oto-heading"
      className="bg-white py-20 sm:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600">
            SSS
          </p>
          <h2
            id="faq-oto-heading"
            className="text-3xl font-bold tracking-tight text-amber-950 sm:text-4xl"
          >
            Sık Sorulan Sorular
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            Oto anahtarcı hizmetleri hakkında merak ettiğiniz her şey.
          </p>
        </div>

        {/* Accordion — reuses the same base component; amber overrides via CSS vars */}
        <div
          data-division="oto-anahtarci"
          className="[--ring:oklch(57%_0.165_48)]"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="hover:text-amber-700 [&[data-state=open]]:text-amber-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="mt-10 text-center text-sm text-[var(--muted-foreground)]">
          Başka sorunuz mu var?{" "}
          <CallButton
            section="oto"
            data-phone-cta="faq"
            className="font-medium text-amber-600 underline-offset-4 hover:underline"
          >
            Bizi arayın
          </CallButton>{" "}
          veya{" "}
          <WhatsAppButton
            section="oto"
            data-wa-cta="faq"
            className="font-medium text-amber-600 underline-offset-4 hover:underline"
          >
            WhatsApp&apos;tan yazın
          </WhatsAppButton>
          .
        </p>
      </div>
    </section>
  );
}
