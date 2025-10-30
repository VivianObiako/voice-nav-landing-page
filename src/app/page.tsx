import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Voice<span className="text-blue-600">Nav</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience hands-free web browsing with Maya AI Assistant. 
            Navigate the web using natural voice commands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://github.com/VivianObiako/voicenav" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8 py-3">
                View on GitHub
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-3" asChild>
              <a href="#installation">
                Installation Guide
              </a>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="text-4xl mb-4">👂</div>
              <CardTitle>Voice Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Powered by OpenAI Whisper for accurate speech-to-text processing
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="text-4xl mb-4">🧠</div>
              <CardTitle>Smart Commands</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Natural language processing for intuitive browser control
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="text-4xl mb-4">🌐</div>
              <CardTitle>Browser Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Seamless control of Safari, Chrome, and Firefox on macOS
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Commands Section */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Voice Commands</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600 font-mono">&ldquo;Hey Maya, open google&rdquo;</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600 font-mono">&ldquo;Hey Maya, click login button&rdquo;</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600 font-mono">&ldquo;Hey Maya, scroll down&rdquo;</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600 font-mono">&ldquo;Hey Maya, go back&rdquo;</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600 font-mono">&ldquo;Hey Maya, refresh page&rdquo;</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600 font-mono">&ldquo;Hey Maya, read page&rdquo;</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Installation Guide */}
        <section id="installation" className="mb-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Quick Start Guide</CardTitle>
              <CardDescription className="text-lg">
                Get VoiceNav running on your macOS system in minutes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Prerequisites */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">📋 Prerequisites</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">System Requirements</h4>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• macOS 10.15 or later</li>
                      <li>• Python 3.8+</li>
                      <li>• Microphone access</li>
                      <li>• Internet connection</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Browser Support</h4>
                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                      <li>• Safari (recommended)</li>
                      <li>• Google Chrome</li>
                      <li>• Mozilla Firefox</li>
                      <li>• Microsoft Edge</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Installation Steps */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">🚀 Installation Steps</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold text-lg mb-2">1. Clone the Repository</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <code className="text-sm">
                        git clone https://github.com/VivianObiako/voicenav.git<br/>
                        cd voicenav
                      </code>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold text-lg mb-2">2. Set Up Virtual Environment</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <code className="text-sm">
                        python3 -m venv venv<br/>
                        source venv/bin/activate
                      </code>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold text-lg mb-2">3. Install Dependencies</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <code className="text-sm">pip install -r requirements.txt</code>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold text-lg mb-2">4. Configure Settings</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <code className="text-sm">
                        # Review and customize config.yaml<br/>
                        # Grant microphone permissions when prompted
                      </code>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold text-lg mb-2">5. Run VoiceNav</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <code className="text-sm">
                        # Menu Bar App (Recommended)<br/>
                        python3 src/main.py --menu-bar<br/><br/>
                        # Command Line<br/>
                        python3 src/main.py<br/><br/>
                        # Settings Panel<br/>
                        python3 src/main.py --settings
                      </code>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                      <p className="text-sm text-green-800 dark:text-green-200">
                        ✅ <strong>Ready!</strong> Say &ldquo;Hey Maya&rdquo; followed by your command!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Troubleshooting */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">🔧 Troubleshooting</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Common Issues</h4>
                    <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                      <li>• Microphone not working? Check permissions</li>
                      <li>• Python errors? Ensure Python 3.8+</li>
                      <li>• Browser not responding? Try Safari first</li>
                      <li>• Audio issues? Check system sound settings</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Getting Help</h4>
                    <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                      <li>• Check the GitHub README</li>
                      <li>• Run diagnostic scripts</li>
                      <li>• Review log files</li>
                      <li>• Open an issue on GitHub</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technology Stack */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Built with Modern Technology
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Python",
              "OpenAI Whisper",
              "macOS TTS",
              "AppleScript",
              "asyncio",
              "rumps"
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2024 VoiceNav. Open source voice-controlled browser automation.
          </p>
        </div>
      </footer>
    </div>
  );
}
