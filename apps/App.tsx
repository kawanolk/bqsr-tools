import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Sparkles, X } from 'lucide-react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-12 h-12 text-indigo-600" />
            BQSR Tools
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Tauriデスクトップアプリケーションへようこそ！
          </p>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                クリックしてください
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
              <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                <Dialog.Title className="text-2xl font-bold text-gray-800 mb-4">
                  ✨ 成功！
                </Dialog.Title>
                <Dialog.Description className="text-gray-600 mb-6">
                  Tauriアプリケーションが正常に動作しています。
                  <br />
                  React + TypeScript + Radix UIで構築されています。
                </Dialog.Description>
                <Dialog.Close asChild>
                  <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <X className="w-6 h-6" />
                  </button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                    閉じる
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          <div className="mt-10 p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-700 font-medium mb-2">技術スタック</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                React 18
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Radix UI
              </span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Tauri 2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
