import React from 'react'

export default function LinuxHeader() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg bg-zinc-900 text-gray-100 font-mono">
      {/* Header bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="ml-4 text-xs text-gray-400">terminal — bash</span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 text-sm leading-relaxed">
        <p><span className="text-green-400">setsu@artilia</span>:<span className="text-blue-400">~/project</span>$ npm run dev</p>
        <p className="text-gray-400">Starting development server...</p>
        <p className="text-green-400">✔ Compiled successfully!</p>
        <p className="text-gray-300">Local: <span className="text-blue-400 underline">http://localhost:3000</span></p>
      </div>
    </div>

  )
}
