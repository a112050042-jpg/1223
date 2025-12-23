
import React, { useState, useEffect } from 'react';
import { SCHEDULE_DATA } from '../constants';
import { ScheduleItem } from '../types';

const Schedule: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchSchedule = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setSchedule(SCHEDULE_DATA);
      setLoading(false);
    };
    fetchSchedule();
  }, []);

  return (
    <div className="py-24 md:py-48 bg-black">
      <div className="container mx-auto px-6">
        <h3 className="text-xs font-black tracking-widest mb-24 uppercase">SHOW SCHEDULE</h3>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-0 divide-y divide-white/20">
            {schedule.map((item) => (
              <div 
                key={item.id} 
                className={`group py-12 flex flex-col md:flex-row md:items-center justify-between transition-opacity duration-500 ${
                  item.status === 'ended' ? 'opacity-50' : 'opacity-100'
                }`}
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="text-xl font-black block">{item.date}</span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">{item.time}</span>
                </div>
                
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="flex items-center space-x-4 mb-2">
                    <h4 className="text-3xl md:text-4xl font-black group-hover:italic transition-all">
                      {item.brand}
                    </h4>
                    {item.status === 'live' && (
                      <div className="flex items-center space-x-2 bg-red-600 px-2 py-1">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span className="text-[10px] font-black uppercase">LIVE</span>
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-gray-500 uppercase">{item.venue}</span>
                </div>

                <div className="md:w-1/4 flex md:justify-end">
                  {item.status === 'upcoming' && (
                    <button className="text-xs font-black border border-white px-6 py-3 hover:bg-white hover:text-black transition-all">
                      RSVP NOW
                    </button>
                  )}
                  {item.status === 'live' && (
                    <button className="text-xs font-black bg-white text-black px-6 py-3 hover:bg-transparent hover:text-white border border-white transition-all">
                      WATCH LIVE
                    </button>
                  )}
                  {item.status === 'ended' && (
                    <span className="text-xs font-black text-gray-500 uppercase border border-gray-500 px-6 py-3 cursor-not-allowed">
                      ENDED
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
