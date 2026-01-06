import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface EditableTextProps {
  value: string
  onChange: (value: string) => void
  isEditing: boolean
  className?: string
  placeholder?: string
  multiline?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'a'
}

export function EditableText({
  value,
  onChange,
  isEditing,
  className,
  placeholder,
  multiline = false,
  as: Component = 'p'
}: EditableTextProps) {
  if (isEditing) {
    if (multiline) {
      return (
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn('min-h-[100px] resize-y', className)}
          placeholder={placeholder}
        />
      )
    }
    return (
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
        placeholder={placeholder}
      />
    )
  }

  return <Component className={className}>{value}</Component>
}
