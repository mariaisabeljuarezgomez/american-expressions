from flask import Flask, send_from_directory, render_template, request, jsonify
import os

app = Flask(__name__, static_folder='.', template_folder='.')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    try:
        return send_from_directory('.', filename)
    except:
        # If file not found, return index.html for SPA routing
        return send_from_directory('.', 'index.html')

# API Routes for future backend integration
@app.route('/api/enrollment', methods=['POST'])
def enrollment_api():
    """Handle enrollment form submissions"""
    try:
        data = request.get_json()
        # For now, just return success
        # TODO: Add database integration, email sending, etc.
        return jsonify({
            'status': 'success',
            'message': 'Application received successfully!'
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': 'There was an error processing your application.'
        }), 500

@app.route('/api/placement-test', methods=['POST'])
def placement_test_api():
    """Handle placement test results"""
    try:
        data = request.get_json()
        # For now, just return success
        # TODO: Add scoring logic, save results, email recommendations
        return jsonify({
            'status': 'success',
            'message': 'Test results saved successfully!'
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': 'There was an error saving your test results.'
        }), 500

@app.route('/api/contact', methods=['POST'])
def contact_api():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        # For now, just return success
        # TODO: Add email sending functionality
        return jsonify({
            'status': 'success',
            'message': 'Message sent successfully!'
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': 'There was an error sending your message.'
        }), 500

# Health check endpoint for Railway
@app.route('/health')
def health_check():
    return jsonify({'status': 'healthy', 'message': 'American Expressions Institute API is running'})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
