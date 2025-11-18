import { Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@assets/b153337a0e6671f5ef3eb7cb82b2e2017d29540e.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Brain Five" className="w-8 h-8" />
              <span className="text-white">Brain Five</span>
            </div>
            <p className="text-sm text-gray-400">
              Cinco mentes transformando ideias em soluções inovadoras desde 2024.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#projetos" className="hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:brainfive.b5@gmail.com" className="hover:text-white transition-colors">brainfive.b5@gmail.com</a></li>
              <li className="text-gray-400">Pernambuco, Brasil</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="www.linkedin.com/in/brain-fiveb5" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Brain Five. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}