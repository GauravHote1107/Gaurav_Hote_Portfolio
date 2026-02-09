import { Trophy, Medal, Award, Star } from 'lucide-react';
import IETE_NationalLevelProjectCompetition from '../assets/IETE_NationalLevelProjectCompetition.jpg';
import SCIT_Graffiti2024_Winner from '../assets/SCIT_Graffiti2024_Winner.jpg';

const achievements = [
  
  {
    icon: Trophy,
    title: 'Multiple Street Play Competition Winner',
    description: 'SCIT Graffiti 2024 Winner',
    stat: '1st Rank',
    color: 'primary',
    image: SCIT_Graffiti2024_Winner,
  },

  {
    icon: Trophy,
    title: 'National Level Project Competition - 2nd Rank (1st Round)',
    description: 'Personal Sync, Smart Living',
    stat: '8th Place',
    color: 'secondary',
    image: IETE_NationalLevelProjectCompetition,
  },

  {
    icon: Trophy,
    title: 'LeetCode',
    description: '200+ problems solved',
    // stat: 'Max Rating: ',
    color: 'primary',
  },
  


  {
    icon: Trophy,
    title: 'Research Papers Published',
    description: '4 Research Papers Published (IEEE and Springer)',
    stat: 'Published Works',
    color: 'secondary',
  },


  
];

export const Achievements = () => {
  const mainAchievements = achievements.slice(0, 6);
  const bottomAchievements = achievements.slice(6);

  const AchievementCard = ({ achievement, idx }: { achievement: typeof achievements[0], idx: number }) => {
    const Icon = achievement.icon;
    return (
      <div
        className="gaming-border bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 group animate-slide-in-left h-full"
        style={{ animationDelay: `${idx * 0.1}s` }}
      >
        {achievement.image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img src={achievement.image} alt={achievement.title} className="w-full h-auto" />
          </div>
        )}
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg bg-${achievement.color}/10 group-hover:animate-pulse-glow shrink-0`}>
            <Icon className={`h-8 w-8 text-${achievement.color}`} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-orbitron font-bold mb-2 group-hover:text-primary transition-colors truncate">
              {achievement.title}
            </h3>
            <p className="text-foreground/80 mb-1 truncate">{achievement.description}</p>
            <div className="text-sm font-rajdhani text-muted-foreground">
              {achievement.stat}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 relative" id="achievements">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-orbitron tracking-widest text-primary">[ ACHIEVEMENT UNLOCKED ]</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-glow mb-4">TROPHIES</h2>
          <p className="text-xl text-muted-foreground">Recognition and awards earned</p>
        </div>

        {/* First 6 items in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {mainAchievements.map((achievement, idx) => (
            <AchievementCard key={achievement.title} achievement={achievement} idx={idx} />
          ))}
        </div>

        {/* Last 2 items centered */}
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
          {bottomAchievements.map((achievement, idx) => (
            <div key={achievement.title} className="w-full md:w-1/2 lg:w-1/3">
              <AchievementCard achievement={achievement} idx={idx + 6} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
