import './App.css'
import { 
  BookOpen, 
  Compass, 
  HelpCircle, 
  MapPin, 
  Sunset, 
  Users 
} from 'lucide-react';

function App() {

  const sections = {
    home: {
      title: "Mind Wanderer",
      description: "Healing through exploration, connection, and personal growth",
      icon: <Compass className="w-16 h-16 text-blue-600" />
    },
    therapyTypes: [
      {
        title: "Adventure Therapy",
        description: "Outdoor experiences that challenge and heal, including wilderness retreats, rock climbing therapy, and nature immersion programs.",
        icon: <MapPin className="w-12 h-12 text-green-600" />
      },
      {
        title: "Group Travel Healing",
        description: "Structured group trips designed to support mental health through shared experiences, mutual understanding, and collective healing.",
        icon: <Users className="w-12 h-12 text-purple-600" />
      },
      {
        title: "Mindful Journeys",
        description: "Curated travel experiences focusing on meditation, self-reflection, and personal transformation in inspiring locations.",
        icon: <Sunset className="w-12 h-12 text-orange-600" />
      }
    ],
    resourceGuides: [
      {
        title: "Mental Health Travel Toolkit",
        description: "Comprehensive guide for planning therapeutic travel experiences",
        icon: <BookOpen className="w-12 h-12 text-blue-500" />
      },
      {
        title: "Professional Support Network",
        description: "Verified therapists specializing in travel-based mental health interventions",
        icon: <HelpCircle className="w-12 h-12 text-red-500" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Mind Wanderer</h1>
          <p className="text-xl text-gray-600">Transforming Mental Health Through Travel and Adventure</p>
        </header>

        <main>
          
          <section className="bg-white rounded-xl shadow-lg p-8 flex items-center mb-12">
            {sections.home.icon}
            <div className="ml-6">
              <h2 className="text-2xl font-semibold text-blue-800">{sections.home.title}</h2>
              <p className="text-gray-600">{sections.home.description}</p>
            </div>
          </section>

          {/* Therapy Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Our Therapeutic Approaches</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {sections.therapyTypes.map((therapy, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
                >
                  {therapy.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{therapy.title}</h3>
                  <p className="text-gray-600">{therapy.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Resources */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Support Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {sections.resourceGuides.map((resource, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all flex items-center"
                >
                  {resource.icon}
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-gray-600">{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="text-center mt-12 text-gray-600">
          <p>© 2024 Mind Wanderer | Mental Health Through Exploration</p>
          <p className="mt-2 text-sm">Disclaimer: Not a substitute for professional medical advice</p>
        </footer>
      </div>
    </div>
  );
}

export default App
