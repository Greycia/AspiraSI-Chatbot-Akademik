import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Building2, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { UserProfile, InterestType } from '@/types';
import { cn } from '@/lib/utils';

interface LandingViewProps {
  onStartChat: (profile: UserProfile) => void;
}

const interestOptions: { value: InterestType; label: string; icon: React.ReactNode; desc: string }[] = [
  { value: 'IS Governance', label: 'IS Governance', icon: <Shield className="w-8 h-8" />, desc: 'Audit & Tata Kelola' },
  { value: 'Enterprise System', label: 'Enterprise System', icon: <Building2 className="w-8 h-8" />, desc: 'ERP & Integrasi' },
  { value: 'Business Intelligence', label: 'Business Intelligence', icon: <BarChart3 className="w-8 h-8" />, desc: 'Data & Analytics' },
];

export const LandingView = ({ onStartChat }: LandingViewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [semester, setSemester] = useState<string>('');
  const [gpa, setGpa] = useState('');
  const [interest, setInterest] = useState<InterestType | ''>('');
  const [gpaError, setGpaError] = useState('');

  const handleGpaChange = (value: string) => {
    setGpa(value);
    const numValue = parseFloat(value);
    if (numValue > 4.0) {
      setGpaError('IPK maksimal 4.00');
    } else {
      setGpaError('');
    }
  };

  const isFormValid = name.trim() && semester && gpa && interest && !gpaError && parseFloat(gpa) <= 4.0;

  const handleSubmit = () => {
    if (!isFormValid || !interest) return;
    
    onStartChat({
      name: name.trim(),
      semester: parseInt(semester),
      gpa: parseFloat(gpa),
      interest: interest as InterestType
    });
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Ambient glow background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Content */}
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6"
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Asisten Akademik Mahasiswa SI Pradita
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Temukan jalur peminatanmu dan raih karir impian bersama AspiraSI
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 glow-orange transition-all duration-300 hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          >
            Mulai Konsultasi
          </Button>
        </motion.div>
      </motion.div>

      {/* Profiling Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg glass border-border/50">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">Profil Kamu</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Nickname */}
            <div className="space-y-2">
              <Label htmlFor="name">Nama Panggilan</Label>
              <Input
                id="name"
                aria-label="Nama Panggilan"
                placeholder="Masukkan nama panggilanmu"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="glass"
              />
            </div>

            {/* Semester */}
            <div className="space-y-2">
              <Label htmlFor="semester">Semester</Label>
              <Select value={semester} onValueChange={setSemester}>
                <SelectTrigger id="semester" aria-label="Semester" className="glass">
                  <SelectValue placeholder="Pilih semester" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                    <SelectItem key={sem} value={sem.toString()}>
                      Semester {sem}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* GPA */}
            <div className="space-y-2">
              <Label htmlFor="gpa">IPK (Indeks Prestasi Kumulatif)</Label>
              <Input
                id="gpa"
                type="number"
                aria-label="IPK"
                placeholder="Contoh: 3.50"
                step="0.01"
                min="0"
                max="4.00"
                value={gpa}
                onChange={(e) => handleGpaChange(e.target.value)}
                className={cn("glass", gpaError && "border-destructive")}
              />
              {gpaError && (
                <p className="text-sm text-destructive">{gpaError}</p>
              )}
            </div>

            {/* Interest Cards */}
            <div className="space-y-2">
              <Label>Peminatan yang Diminati</Label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {interestOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setInterest(option.value)}
                    className={cn(
                      "p-4 rounded-xl border-2 transition-all duration-300 text-center",
                      "bg-background/50 backdrop-blur-sm",
                      interest === option.value
                        ? "border-primary ring-4 ring-primary/20 glow-orange"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className={cn(
                      "mx-auto mb-2 transition-colors",
                      interest === option.value ? "text-primary" : "text-muted-foreground"
                    )}>
                      {option.icon}
                    </div>
                    <p className="font-semibold text-sm">{option.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{option.desc}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              disabled={!isFormValid}
              onClick={handleSubmit}
            >
              Mulai Chat
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
