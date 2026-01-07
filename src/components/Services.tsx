import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">{t.services.label}</span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl mb-6">{t.services.title}</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">{t.services.description}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              viewport={{ once: true }}
              className="group rounded-xl border border-border bg-card p-8 shadow-soft hover:shadow-medium hover:border-accent transition-all duration-300"
            >
              <div className="mb-4 h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <div className="text-2xl text-accent group-hover:scale-110 transition-transform">🏗</div>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
