import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Headphones, Code, Mic, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function CodigoCotidianoLanding() {
  const integrantes = [
    {
      nombre: "Lola Rodriguez Farias",
      rol: "Host Principal",
      descripcion: "Estudiante de Comunicación especializada en medios digitales",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      nombre: "Ludmila Brizuela",
      rol: "Co-host Técnico",
      descripcion: "Apasionado por la tecnología y la programación",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      nombre: "Angel Coscarelli",
      rol: "Productora",
      descripcion: "Encargada de la edición y producción del contenido",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      nombre: "Teo Sordó",
      rol: "Investigador",
      descripcion: "Responsable de la investigación y preparación de temas",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      nombre: "Mercedes Marighetti",
      rol: "Investigador",
      descripcion: "Responsable de la investigación y preparación de temas",
      avatar: "/placeholder.svg?height=100&width=100",
    },

    {
      nombre: "Romina Forclas",
      rol: "Investigador",
      descripcion: "Responsable de la investigación y preparación de temas",
      avatar: "/placeholder.svg?height=100&width=100",
    },

    {
      nombre: "Romina Forclas",
      rol: "Investigador",
      descripcion: "Responsable de la investigación y preparación de temas",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Code className="h-8 w-8 text-green-400" />
            <h1 className="text-2xl font-bold text-white">Código Cotidiano</h1>
            <Badge variant="outline" className="border-green-400 text-green-400">
              Podcast
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-mono">
              {"<Código"}
              <span className="text-green-400">Cotidiano</span>
              {"/>"}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Un podcast donde exploramos el mundo de la tecnología, la programación y la comunicación digital. Creado
              por estudiantes para estudiantes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-green-400/20 text-green-400 border-green-400/30 px-4 py-2">
              <Mic className="w-4 h-4 mr-2" />
              Taller de Comunicación
            </Badge>
            <Badge className="bg-blue-400/20 text-blue-400 border-blue-400/30 px-4 py-2">
              <Code className="w-4 h-4 mr-2" />
              Tecnología
            </Badge>
            <Badge className="bg-purple-400/20 text-purple-400 border-purple-400/30 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Estudiantes
            </Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Headphones className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Contenido Original</h3>
                <p className="text-slate-400 text-sm">Episodios únicos sobre tecnología y comunicación</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Equipo Diverso</h3>
                <p className="text-slate-400 text-sm">Diferentes perspectivas y especialidades</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Enfoque Académico</h3>
                <p className="text-slate-400 text-sm">Proyecto universitario con rigor académico</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrantes Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">{"// Nuestro Equipo"}</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Conoce a los integrantes que hacen posible Código Cotidiano
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrantes.map((integrante, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-green-400/30">
                    <Image
                      src={integrante.avatar || "/placeholder.svg"}
                      alt={integrante.nombre}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-lg">{integrante.nombre}</CardTitle>
                  <Badge className="bg-green-400/20 text-green-400 border-green-400/30">{integrante.rol}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-center text-sm">
                    {integrante.descripcion}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">{"// Escucha Nuestros Episodios"}</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Accede a nuestro contenido y sumérgete en el mundo del código cotidiano
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600">
              <CardHeader className="text-center">

                <CardTitle className="text-white text-2xl mb-2">Episodio Piloto</CardTitle>
                <CardDescription className="text-slate-300">
                  Nuestro primer episodio donde presentamos el proyecto y hablamos sobre los objetivos del podcast
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-600">
                  <audio controls className="w-full mb-4">
                    <source src="/sesion01.mp3" type="audio/mpeg" />
                    Tu navegador no soporta el elemento de audio.
                  </audio>

                </div>

                <div className="text-left space-y-2">
                  <h4 className="text-white font-semibold">En este episodio hablamos sobre:</h4>
                  <ul className=" space-y-1 text-sm font-bold">
                    <li>• Presentación del equipo</li>
                    <li>• Objetivos del podcast</li>
                    <li>• La importancia de la comunicación en tecnología</li>
                    <li>• Nuestras expectativas para futuros episodios</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="h-6 w-6 text-green-400" />
            <span className="text-white font-semibold">Código Cotidiano</span>
          </div>
          <p className="text-slate-400 text-sm">Proyecto académico - Taller de Comunicación © 2024</p>
          <p className="text-slate-500 text-xs mt-2">
            Inspirado en "while True: learn" - Explorando el mundo de la tecnología y la comunicación
          </p>
        </div>
      </footer>
    </div>
  )
}
