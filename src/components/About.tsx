import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.stat1, value: "15+" },
    { label: t.about.stat2, value: "200+" },
    { label: t.about.stat3, value: "98%" },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-widest text-accent">{t.about.label}</span>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl mb-6">
              {t.about.title1}
              <br />
              <span className="text-primary">{t.about.title2}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t.about.p1}</p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{t.about.p2}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-serif font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {t.about.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-border bg-background p-6 shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="mb-3 h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <div className="text-xl text-accent">✓</div>
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
