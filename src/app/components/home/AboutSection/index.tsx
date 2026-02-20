import { ButtonDefault } from "@/app/components/ui";


export default function AboutSection() {
  return (
    <section className="pt-20 pb-64">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          {/* ESQUERDA */}
          <div>
            <h2 className="font-extrabold uppercase leading-[1.05] 3xl:text-[100px] xl:text-7xl md:text-5xl text-3xl">
              UMA <span className="text-purplePaths-100">AGÊNCIA</span> QUE{" "}
              <span className="text-purplePaths-100">ATENDE</span> E ENTENDE.
            </h2>

            <div className="mt-16">
              <ButtonDefault href="#contato">Conheça a Base3</ButtonDefault>
            </div>
          </div>

          {/* DIREITA */}
          <div className="space-y-10 text-lg xl:text-xl leading-relaxed text-black">
            <p>
              Nosso trabalho também é consultivo – oferecemos estratégias,
              soluções e operacionalização.
            </p>

            <p>
              Na Base3, não apenas construímos marcas; criamos experiências
              memoráveis com planejamento, criatividade e dados. Somos uma
              agência integrada, especializada em marketing, que nos permite ir
              da comunicação até eventos cuidando de cada detalhe.
            </p>

            <p>
              Nosso diferencial está na visão 360°, explorando todas as facetas
              da comunicação para elevar a sua marca a novos patamares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
