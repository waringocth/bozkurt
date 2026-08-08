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
    question: "Kapı açma hizmeti ne kadar sürer?",
    answer:
      "Esenyurt, Beylikdüzü ve Bahçeşehir ilçelerinde ortalama 10-20 dakika içinde adresinize ulaşıyoruz. Trafik yoğunluğuna bağlı olarak bu süre değişebilir; ancak çağrı aldıktan hemen sonra en yakın ustamız yola çıkmaktadır. Kapı açma işleminin kendisi çoğunlukla 5-15 dakika sürmektedir.",
  },
  {
    id: "q2",
    question: "Gece veya tatil günlerinde de hizmet veriyor musunuz?",
    answer:
      "Evet, 7 gün 24 saat kesintisiz hizmet veriyoruz. Hafta sonları, resmi tatiller ve gece yarısı dahil her an arayabilirsiniz. Acil çilingir ihtiyacınızda telefon veya WhatsApp üzerinden bize ulaşın; ustamız en kısa sürede yanınızda olacaktır.",
  },
  {
    id: "q3",
    question: "Kapı açma sırasında kapım veya kilidim zarar görür mü?",
    answer:
      "Profesyonel ekibimiz hasarsız açma yöntemlerini kullanmaktadır. Standart çelik kapılar ve klasik silindirli kilitlerin büyük çoğunluğu hiç hasar oluşmadan açılabilmektedir. Çok nadir durumlarda (yüksek güvenlikli kilitlerin belirli modelleri) açma işlemi sırasında silindirin değiştirilmesi gerekebilir; bu durum önceden size bildirilir.",
  },
  {
    id: "q4",
    question: "Kilit değişimi için ücret ne kadar?",
    answer:
      "Fiyatlar; kilit tipi, marka ve işçilik süresine göre değişmektedir. Yerinde inceleme yapılmadan net fiyat vermek doğru olmaz. Ancak standart silindir değişimi için rekabetçi ve şeffaf fiyatlarla çalışmaktayız. Telefon veya WhatsApp üzerinden modelinizi ve durumunuzu belirtirseniz yaklaşık bir fiyat bilgisi alabiliriz.",
  },
  {
    id: "q5",
    question: "Hangi ilçe ve mahallelere hizmet veriyorsunuz?",
    answer:
      "Birincil hizmet bölgemiz Esenyurt, Beylikdüzü ve Bahçeşehir ilçeleridir. Bu ilçelerin tüm mahallelerine hizmet veriyoruz. Bağcılar, Avcılar ve Küçükçekmece gibi komşu ilçelere de koşullara göre hizmet verebiliyoruz. Adresinizin hizmet bölgemizde olup olmadığını öğrenmek için bizi arayabilirsiniz.",
  },
];

export default function FaqSection() {
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
      aria-labelledby="faq-heading"
      className="bg-white py-20 sm:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-500">
            SSS
          </p>
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl"
          >
            Sık Sorulan Sorular
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            Çilingir hizmetleri hakkında merak ettiğiniz her şey.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions */}
        <p className="mt-10 text-center text-sm text-[var(--muted-foreground)]">
          Başka sorunuz mu var?{" "}
          <CallButton
            section="cilingir"
            data-phone-cta="faq"
            className="font-medium text-navy-600 underline-offset-4 hover:underline"
          >
            Bizi arayın
          </CallButton>{" "}
          veya{" "}
          <WhatsAppButton
            section="cilingir"
            data-wa-cta="faq"
            className="font-medium text-navy-600 underline-offset-4 hover:underline"
          >
            WhatsApp&apos;tan yazın
          </WhatsAppButton>
          .
        </p>
      </div>
    </section>
  );
}
