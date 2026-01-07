import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  const schedule = [
    { hours: "07:30 - 17:00" },
    { hours: "07:30 - 17:00" },
    { hours: "07:30 - 17:00" },
    { hours: "07:30 - 17:00" },
    { hours: "07:30 - 17:00" },
    { hours: t.hours.closed },
    { hours: t.hours.closed },
  ];

  const todayIndex = new Date().getDay();

  return (
    <section id="hours" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="mb-8 text-center">
            <span className="text-sm uppercase tracking-widest text-accent">{t.hours.label}</span>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">{t.hours.title}</h2>
          </div>

          <div className="rounded-2xl border border-border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg">{t.hours.header}</span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                    viewport={{ once: true }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
                      <span className={isToday ? "font-semibold text-primary" : ""}>{t.hours.days[i]}</span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-2">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span className={isClosed ? "text-muted-foreground" : ""}>{item.hours}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
