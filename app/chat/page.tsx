
'use client';
 
import { Button } from '@/components/ui/button';
import { useChat } from 'ai/react';
import {Input} from "@/components/ui/input"
 
export default function page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <main className='flex  flex-1 flex-col gap-4 p-4  md:gap-8 md:p-6'>
          <form className="grid gap-4 md:gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
  
            <Input value={input} onChange={handleInputChange} className="rounded-xl" placeholder="Type a message..." type="text" />
            <Button  type="submit" className="w-full rounded-xl">Send</Button>
          </div>
        </form>
      <div className='p-4'>
      <ul>
        {messages.map((m, index) => (
          <li key={index} className='text-grey-500 dark:text-grey-400'>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </li>
        ))}
      </ul>
      </div>
  
      
    </main>
  );
}

