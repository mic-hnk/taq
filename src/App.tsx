import { useEffect, useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { PencilSimple, FloppyDisk, Envelope } from '@phosphor-icons/react'
import { toast, Toaster } from 'sonner'
import { EditableText } from '@/components/EditableText'
import { EditableList } from '@/components/EditableList'
import { defaultContent } from '@/lib/default-content'
import { TAQContent } from '@/lib/content-types'

function App() {
  const [content, setContent] = useKV<TAQContent>('taq-content', defaultContent)
  const [isEditing, setIsEditing] = useState(false)
  const [isOwner, setIsOwner] = useState(false)
  const [tempContent, setTempContent] = useState<TAQContent>(defaultContent)

  useEffect(() => {
    window.spark.user().then(user => {
      if (user) {
        setIsOwner(user.isOwner)
      }
    })
  }, [])

  useEffect(() => {
    if (content) {
      setTempContent(content)
    }
  }, [content])

  const handleSave = () => {
    setContent(() => tempContent)
    setIsEditing(false)
    toast.success('Zmiany zostały zapisane')
  }

  const handleCancel = () => {
    setTempContent(() => content || defaultContent)
    setIsEditing(false)
    toast.info('Anulowano edycję')
  }

  const updateTempContent = (path: string[], value: any) => {
    setTempContent(prev => {
      const updated = { ...prev }
      let current: any = updated
      for (let i = 0; i < path.length - 1; i++) {
        current[path[i]] = { ...current[path[i]] }
        current = current[path[i]]
      }
      current[path[path.length - 1]] = value
      return updated
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-primary border-primary font-semibold">
              TAQ
            </Badge>
            <span className="font-medium text-sm hidden sm:inline">System Jakości Wieprzowiny</span>
          </div>
          {isOwner && (
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <Button onClick={handleCancel} variant="outline" size="sm">
                    Anuluj
                  </Button>
                  <Button onClick={handleSave} size="sm" className="gap-2">
                    <FloppyDisk />
                    Zapisz
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <PencilSimple />
                  Edytuj
                </Button>
              )}
            </div>
          )}
        </div>
      </header>

      <main>
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary opacity-95" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }} />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
            <EditableText
              value={tempContent.hero.title}
              onChange={(val) => updateTempContent(['hero', 'title'], val)}
              isEditing={isEditing}
              as="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 tracking-tight"
              placeholder="Tytuł strony"
            />
            <EditableText
              value={tempContent.hero.subtitle}
              onChange={(val) => updateTempContent(['hero', 'subtitle'], val)}
              isEditing={isEditing}
              as="p"
              className="text-xl md:text-2xl text-primary-foreground/90"
              placeholder="Podtytuł"
            />
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <EditableText
              value={tempContent.introduction.title}
              onChange={(val) => updateTempContent(['introduction', 'title'], val)}
              isEditing={isEditing}
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              placeholder="Tytuł sekcji"
            />
            <EditableText
              value={tempContent.introduction.content}
              onChange={(val) => updateTempContent(['introduction', 'content'], val)}
              isEditing={isEditing}
              multiline
              className="text-lg text-foreground/80 leading-relaxed"
              placeholder="Treść wprowadzenia"
            />
          </div>
        </section>

        <Separator className="container mx-auto max-w-4xl" />

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Cztery Filary Systemu TAQ
            </h2>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {(['pillar1', 'pillar2', 'pillar3', 'pillar4'] as const).map((pillarKey) => {
                const pillar = tempContent.pillars[pillarKey]
                return (
                  <Card key={pillarKey} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <Badge className="text-2xl font-bold px-4 py-2 bg-accent text-accent-foreground shrink-0">
                        {pillar.number}
                      </Badge>
                      <EditableText
                        value={pillar.title}
                        onChange={(val) => updateTempContent(['pillars', pillarKey, 'title'], val)}
                        isEditing={isEditing}
                        as="h3"
                        className="text-2xl font-semibold text-foreground flex-1"
                        placeholder="Tytuł filaru"
                      />
                    </div>
                    <EditableText
                      value={pillar.description}
                      onChange={(val) => updateTempContent(['pillars', pillarKey, 'description'], val)}
                      isEditing={isEditing}
                      multiline
                      className="text-muted-foreground mb-4 leading-relaxed"
                      placeholder="Opis filaru"
                    />
                    <EditableList
                      items={pillar.points}
                      onChange={(val) => updateTempContent(['pillars', pillarKey, 'points'], val)}
                      isEditing={isEditing}
                      itemClassName="text-foreground/80 leading-relaxed"
                    />
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <EditableText
              value={tempContent.finalProduct.title}
              onChange={(val) => updateTempContent(['finalProduct', 'title'], val)}
              isEditing={isEditing}
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              placeholder="Tytuł sekcji"
            />
            <EditableText
              value={tempContent.finalProduct.intro}
              onChange={(val) => updateTempContent(['finalProduct', 'intro'], val)}
              isEditing={isEditing}
              multiline
              className="text-lg text-foreground/80 leading-relaxed mb-8"
              placeholder="Wprowadzenie do produktu finalnego"
            />

            <Card className="p-6 md:p-8 mb-6 bg-secondary/5 border-secondary/20">
              <EditableText
                value={tempContent.finalProduct.parameters.title}
                onChange={(val) => updateTempContent(['finalProduct', 'parameters', 'title'], val)}
                isEditing={isEditing}
                as="h3"
                className="text-xl font-semibold text-foreground mb-4"
                placeholder="Tytuł parametrów"
              />
              <EditableList
                items={tempContent.finalProduct.parameters.items}
                onChange={(val) => updateTempContent(['finalProduct', 'parameters', 'items'], val)}
                isEditing={isEditing}
                itemClassName="text-foreground/80 font-medium"
              />
            </Card>

            <Card className="p-6 md:p-8 bg-accent/5 border-accent/20">
              <EditableText
                value={tempContent.finalProduct.assortment.title}
                onChange={(val) => updateTempContent(['finalProduct', 'assortment', 'title'], val)}
                isEditing={isEditing}
                as="h3"
                className="text-xl font-semibold text-foreground mb-4"
                placeholder="Tytuł asortymentu"
              />
              <EditableList
                items={tempContent.finalProduct.assortment.items}
                onChange={(val) => updateTempContent(['finalProduct', 'assortment', 'items'], val)}
                isEditing={isEditing}
                itemClassName="text-foreground/80"
              />
            </Card>
          </div>
        </section>

        <Separator className="container mx-auto max-w-4xl" />

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <EditableText
              value={tempContent.certification.title}
              onChange={(val) => updateTempContent(['certification', 'title'], val)}
              isEditing={isEditing}
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-8"
              placeholder="Tytuł sekcji"
            />
            <div className="space-y-6">
              {(['traceability', 'certification', 'supervision'] as const).map((key) => {
                const section = tempContent.certification.sections[key]
                return (
                  <Card key={key} className="p-6 md:p-8">
                    <EditableText
                      value={section.title}
                      onChange={(val) => updateTempContent(['certification', 'sections', key, 'title'], val)}
                      isEditing={isEditing}
                      as="h3"
                      className="text-xl font-semibold text-foreground mb-3"
                      placeholder="Tytuł podsekcji"
                    />
                    <EditableText
                      value={section.content}
                      onChange={(val) => updateTempContent(['certification', 'sections', key, 'content'], val)}
                      isEditing={isEditing}
                      multiline
                      className="text-foreground/80 leading-relaxed"
                      placeholder="Treść podsekcji"
                    />
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-4xl">
            <EditableText
              value={tempContent.contact.title}
              onChange={(val) => updateTempContent(['contact', 'title'], val)}
              isEditing={isEditing}
              as="h2"
              className="text-3xl md:text-4xl font-bold mb-8"
              placeholder="Tytuł sekcji"
            />
            
            <Card className="p-6 md:p-8 mb-6 bg-card">
              <EditableText
                value={tempContent.contact.organization.name}
                onChange={(val) => updateTempContent(['contact', 'organization', 'name'], val)}
                isEditing={isEditing}
                as="h3"
                className="text-xl font-semibold text-foreground mb-2"
                placeholder="Nazwa organizacji"
              />
              <EditableText
                value={tempContent.contact.organization.address}
                onChange={(val) => updateTempContent(['contact', 'organization', 'address'], val)}
                isEditing={isEditing}
                className="text-muted-foreground mb-2"
                placeholder="Adres"
              />
              {isEditing ? (
                <div className="flex items-center gap-2 text-foreground">
                  <Envelope className="text-accent" />
                  <EditableText
                    value={tempContent.contact.organization.email}
                    onChange={(val) => updateTempContent(['contact', 'organization', 'email'], val)}
                    isEditing={isEditing}
                    className="flex-1"
                    placeholder="Email"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 text-foreground">
                  <Envelope className="text-accent" />
                  <a href={`mailto:${tempContent.contact.organization.email}`} className="hover:text-accent transition-colors">
                    {tempContent.contact.organization.email}
                  </a>
                </div>
              )}
            </Card>

            <Card className="p-6 md:p-8 bg-card">
              <EditableText
                value={tempContent.contact.certificationBodies.title}
                onChange={(val) => updateTempContent(['contact', 'certificationBodies', 'title'], val)}
                isEditing={isEditing}
                as="h3"
                className="text-lg font-semibold text-foreground mb-4"
                placeholder="Tytuł jednostek certyfikujących"
              />
              <div className="space-y-4">
                {tempContent.contact.certificationBodies.bodies.map((body, index) => (
                  <div key={index} className="border-l-4 border-accent pl-4">
                    <EditableText
                      value={body.name}
                      onChange={(val) => {
                        const updated = [...tempContent.contact.certificationBodies.bodies]
                        updated[index] = { ...updated[index], name: val }
                        updateTempContent(['contact', 'certificationBodies', 'bodies'], updated)
                      }}
                      isEditing={isEditing}
                      className="font-medium text-foreground mb-1"
                      placeholder="Nazwa jednostki"
                    />
                    <EditableText
                      value={body.address}
                      onChange={(val) => {
                        const updated = [...tempContent.contact.certificationBodies.bodies]
                        updated[index] = { ...updated[index], address: val }
                        updateTempContent(['contact', 'certificationBodies', 'bodies'], updated)
                      }}
                      isEditing={isEditing}
                      className="text-muted-foreground text-sm"
                      placeholder="Adres jednostki"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-card">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} System Jakości Wieprzowiny TAQ. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
