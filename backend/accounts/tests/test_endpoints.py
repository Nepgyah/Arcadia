from .test_setup import TestSetup
from accounts.models import User
class TestViews(TestSetup):

    def test_user_can_login(self):
        data = {
            'email': self.test_user_email,
            'password': self.test_user_password
        }
        response = self.client.post(self.login_url, data, format='json')
        self.assertEqual(response.status_code, 200)

    def test_user_cannot_login_with_invalid_credentials(self):
        response = self.client.post(self.login_url, {
            'email': self.test_user_email,
            'password': 'IncorrectPassword098'
        },
        format='json')
        self.assertEqual(response.status_code, 400)
        
    def test_user_can_logout(self):
        self.client.force_login(user=self.test_user_obj)
        response = self.client.post(self.logout_url)
        self.assertEqual(response.status_code, 200)
