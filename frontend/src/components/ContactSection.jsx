import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { personalInfo } from '../mock';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with backend API
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: 'View my repositories',
      href: personalInfo.github
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            I'm currently open to full-time Data Engineer opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors"
                      >
                        <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                          {method.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {method.label}
                          </p>
                          <p className="text-sm text-slate-600">{method.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your opportunity or project..."
                      required
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
