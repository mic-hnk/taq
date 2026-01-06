import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Plus, X } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface EditableListProps {
  items: string[]
  onChange: (items: string[]) => void
  isEditing: boolean
  className?: string
  itemClassName?: string
}

export function EditableList({
  items,
  onChange,
  isEditing,
  className,
  itemClassName
}: EditableListProps) {
  const [newItem, setNewItem] = useState('')

  const updateItem = (index: number, value: string) => {
    const updated = [...items]
    updated[index] = value
    onChange(updated)
  }

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index))
  }

  const addItem = () => {
    if (newItem.trim()) {
      onChange([...items, newItem.trim()])
      setNewItem('')
    }
  }

  if (isEditing) {
    return (
      <div className={cn('space-y-3', className)}>
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 items-start">
            <Textarea
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
              className="flex-1 min-h-[60px]"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeItem(index)}
              className="shrink-0"
            >
              <X />
            </Button>
          </div>
        ))}
        <div className="flex gap-2 items-start">
          <Textarea
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Dodaj nowy punkt..."
            className="flex-1 min-h-[60px]"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.ctrlKey) {
                addItem()
              }
            }}
          />
          <Button
            variant="outline"
            size="icon"
            onClick={addItem}
            className="shrink-0"
          >
            <Plus />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item, index) => (
        <li key={index} className={cn('pl-6 relative', itemClassName)}>
          <span className="absolute left-0 text-accent">•</span>
          {item}
        </li>
      ))}
    </ul>
  )
}
