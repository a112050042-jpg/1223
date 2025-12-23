
import React from 'react';
import { SelectionData } from '../types';
import { Download } from 'lucide-react';

interface CallForEntriesProps {
  data: SelectionData;
}

const CallForEntries: React.FC<CallForEntriesProps> = ({ data }) => {
  return (
    <div className="py-24 md:py-48 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-black pb-24">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h3 className="text-xs font-black tracking-widest mb-12 uppercase">{data.heading}</h3>
            <div className="mb-16">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-2">{data.deadline_note}</span>
              <h4 className="text-4xl md:text-7xl font-black tracking-tighter">{data.deadline_display}</h4>
            </div>
            
            <ul className="space-y-6">
              {data.categories.map((cat, idx) => (
                <li key={idx} className="flex items-center space-x-4">
                  <span className="text-xs font-black w-6 h-6 rounded-full border border-black flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="text-xl font-bold">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/3 bg-black text-white p-12 md:p-16 flex flex-col justify-center">
            <h5 className="text-2xl font-black mb-8 leading-tight">Ready to lead the next era of fashion?</h5>
            <p className="text-sm text-gray-400 mb-12">
              內含徵選說明、參展簡章、檢核表等必要文件。請在截止日前完成上傳。
            </p>
            <a 
              href={data.download_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group"
            >
              <span className="text-lg font-black group-hover:underline decoration-2 underline-offset-8 transition-all">
                {data.download_text}
              </span>
              <Download className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForEntries;
