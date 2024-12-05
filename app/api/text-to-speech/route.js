export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { text, languageCode = 'en-US', voiceName = 'en-US-Wavenet-D', audioEncoding = 'MP3' } = req.body;
  
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_TEXT_API_KEY;
      const endpoint = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
  
      const requestBody = {
        input: { text },
        voice: { languageCode, name: voiceName },
        audioConfig: { audioEncoding },
      };
  
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });
  
        if (!response.ok) {
          throw new Error('Failed to synthesize speech');
        }
  
        const data = await response.json();
        const audioContent = data.audioContent;
  
        // Convert base64 audio to a downloadable file
        res.status(200).json({ audioBase64: audioContent });
      } catch (error) {
        console.error('Error during TTS:', error);
        res.status(500).json({ error: 'Text-to-Speech request failed' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  